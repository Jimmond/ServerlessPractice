import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-post',
  template: `
    <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Do a post!</h1>

    </div>
    </div>
    </section>

    <section class="section">
    <div class="container">

     <!-- form goes here -->
      <form (ngSubmit)="processForm()" #doPostForm="ngForm">
        <!-- name -->
        <div class="field">
          <input 
            type="text" 
            name="name" 
            class="input" 
            placeholder="Your Name" 
            [(ngModel)]="name"
            required
            minlength="3"
            #nameInput="ngModel">

          <div class="help is-error is-danger" *ngIf="nameInput.invalid && nameInput.dirty">
            Name is required and needs to be at least 3 characters long.
          </div>
        </div>

        <!-- email -->
        <div class="field">          
          <input 
            type="email" 
            name="email" 
            class="input" 
            placeholder="Your Email" 
            [(ngModel)]="email"
            required
            email
            #emailInput="ngModel">

          <div class="help is-error is-danger" *ngIf="emailInput.invalid && emailInput.dirty">
            Needs to be a valid email.
          </div>
        </div>
        <!-- Title -->
        <div class="field">
          <input 
            type="text" 
            name="title" 
            class="input" 
            placeholder="Put a title" 
            [(ngModel)]="title"
            required
            minlength="3"
            #nameInput="ngModel">

          <div class="help is-error is-danger" *ngIf="nameInput.invalid && nameInput.dirty">
          Title is required!
          </div>
        </div>
        <!-- message -->
        <div class="field">
          <textarea 
            class="textarea" 
            name="message" 
            placeholder="What's on your mind?" 
            [(ngModel)]="message"
            required
            #messageInput="ngModel"></textarea>

            <div class="help is-error is-danger" *ngIf="nameInput.invalid && nameInput.dirty">
              Your message is required!
            </div>
        </div>

        <button 
        type="submit" 
        class="button is-danger is-large"
        [disabled]="doPostForm.invalid">
        Submit
        </button>

        </form>

        </div>
        </section>
  `,
  styles: []
})
export class DoPostComponent implements OnInit {
  name: string;
  email: string;
  title:string;
  message: string;

  constructor() {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. The title of my post is ${this.title} My message is ${this.message}`;
    alert(allInfo); 
  }

}