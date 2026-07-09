import { Component } from '@angular/core';
import { Navbar } from './sections/navbar';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Projects } from './sections/projects';
import { Footer } from './sections/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
