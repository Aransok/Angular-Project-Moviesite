import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Movie } from 'src/app/types/Movie';

@Component({
  selector: 'app-movie-details-popup',
  templateUrl: './movie-details-popup.component.html',
  styleUrls: ['./movie-details-popup.component.css'],
})
export class MovieDetailsPopupComponent {
  @Input() movie!: Movie;
  @Output() close = new EventEmitter<void>(); 
  constructor(private sanitizer: DomSanitizer){}
  closeMovieDetails(): void {
    this.close.emit(); 
  }
  getYouTubeEmbedUrl(trailerUrl: string | undefined): SafeResourceUrl | undefined {
    if (trailerUrl) {
      // Extract YouTube video ID from the trailer URL
      const videoId = getYouTubeVideoId(trailerUrl);
      // Construct the YouTube embed URL
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      // Sanitize the URL to prevent security risks
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else {
      return undefined; // Return undefined if no trailer URL is provided
    }
  }
  
}
export function getYouTubeVideoId(url: string): string {
  const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return videoIdMatch ? videoIdMatch[1] : '';
}