//================= Add necessary Libs for the App
/// <reference path="typings/angular2/angular2.d.ts" />
import {
    Component,
    NgFor,
    View,
    bootstrap,
} from "angular2/angular2";

//================= Creating Data Structure
class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    
    //Imposing Excapsulation
    voteUp() {
        this.votes += 1;
        return false;
    }

    voteDown() {
        this.votes -= 1;
        return false;
    }

    domain() {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    }
}

//================= List of Component(s)
//Helping Child Class/Object/Component
@Component({
    selector: 'reddit-article',
    properties: ['component_article_variable'] //Configurable parameters we expect our component to receive by which this component
    //will render the view.
})
@View({
    //Template specifies the HTML template that we want to use for rendering this component (using TypeScript’s backtick)
    template: `
    <article>
      <div class="votes">{{ component_article_variable.votes }}</div>
      <div class="main">
        <h2>
          <a href="{{ component_article_variable.title }}">{{ component_article_variable.title }}</a>
          <span>({{ component_article_variable.domain() }})</span>
        </h2>
        <ul>
          <li><a href (click)='component_article_variable.voteUp()'>upvote</a></li>
          <li><a href (click)='component_article_variable.voteDown()'>downvote</a></li>
        </ul>
      </div>
   </article>
   `
})

class RedditArticle {
    //Is Empty now ;)
}

//Main Parent Class/Object/Component
@Component({
    selector: 'reddit'
})
@View({
    template: `
    <section class="new-link">
      <div class="control-group">
        <div><label for="title">Title:</label></div>
        <div><input name="title" #newtitle></div>
      </div>
      <div class="control-group">
        <div><label for="link">Link:</label></div>
        <div><input name="link" #newlink></div>
      </div>

      <button (click)="addArticle(newtitle, newlink)">Submit Link</button>
    </section>

    <!--
    The square brackets indicate that we are setting the component_article_variable to
    receive the template’s article local variable we declared inside our *for clause. Phew.... ;)
    -->
    <reddit-article *ng-for="#article of articleArray" [component_article_variable]="article"></reddit-article>
  `,
    directives: [NgFor, RedditArticle]  //Directive specifies the other components (an Array of classes) we want to be able to use in this view
})

class RedditApp {
    articleArray: Array<Article>;

    constructor() {
        this.articleArray = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io')
        ];

        console.log(this.articleArray[0])
        console.log(this.articleArray[1])
    }

    addArticle(title, link) {
        console.log("Adding article with title", title.value, "and link", link.value);

        this.articleArray.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
    }
}

bootstrap(RedditApp);
