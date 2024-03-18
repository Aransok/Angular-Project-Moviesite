import { Component, OnInit } from '@angular/core';
import { movies } from './../../data/database'
import { Movie } from 'src/app/types/Movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie: Movie | null = null

  constructor() { }

  ngOnInit(): void {
    this.movies = movies;
  }
  openMovieDetails(movie: Movie): void {
    this.selectedMovie = movie;
  }

  closeMovieDetails(): void {
    this.selectedMovie = null;
  }
}
