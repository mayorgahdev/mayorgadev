import { Component } from '@angular/core';
import { Navbar } from './sections/navbar';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Skills } from './sections/skills';
import { Experience } from './sections/experience';
import { Projects } from './sections/projects';
import { Contact } from './sections/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Experience, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
