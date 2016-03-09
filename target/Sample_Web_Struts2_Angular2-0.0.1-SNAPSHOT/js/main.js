"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//================= Add necessary Libs for the App
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
//================= Creating Data Structure
var Article = (function () {
    function Article(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    //Imposing Excapsulation
    Article.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    Article.prototype.domain = function () {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    };
    return Article;
}());
//================= List of Component(s)
//Helping Child Class/Object/Component
var RedditArticle = (function () {
    function RedditArticle() {
    }
    RedditArticle = __decorate([
        angular2_1.Component({
            selector: 'reddit-article',
            properties: ['component_article_variable'] //Configurable parameters we expect our component to receive by which this component
        }),
        angular2_1.View({
            //Template specifies the HTML template that we want to use for rendering this component (using TypeScript’s backtick)
            template: "\n    <article>\n      <div class=\"votes\">{{ component_article_variable.votes }}</div>\n      <div class=\"main\">\n        <h2>\n          <a href=\"{{ component_article_variable.title }}\">{{ component_article_variable.title }}</a>\n          <span>({{ component_article_variable.domain() }})</span>\n        </h2>\n        <ul>\n          <li><a href (click)='component_article_variable.voteUp()'>upvote</a></li>\n          <li><a href (click)='component_article_variable.voteDown()'>downvote</a></li>\n        </ul>\n      </div>\n   </article>\n   "
        })
    ], RedditArticle);
    return RedditArticle;
}());
//Main Parent Class/Object/Component
var RedditApp = (function () {
    function RedditApp() {
        this.articleArray = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io')
        ];
        console.log(this.articleArray[0]);
        console.log(this.articleArray[1]);
    }
    RedditApp.prototype.addArticle = function (title, link) {
        console.log("Adding article with title", title.value, "and link", link.value);
        this.articleArray.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
    };
    RedditApp = __decorate([
        angular2_1.Component({
            selector: 'reddit'
        }),
        angular2_1.View({
            template: "\n    <section class=\"new-link\">\n      <div class=\"control-group\">\n        <div><label for=\"title\">Title:</label></div>\n        <div><input name=\"title\" #newtitle></div>\n      </div>\n      <div class=\"control-group\">\n        <div><label for=\"link\">Link:</label></div>\n        <div><input name=\"link\" #newlink></div>\n      </div>\n\n      <button (click)=\"addArticle(newtitle, newlink)\">Submit Link</button>\n    </section>\n\n    <!--\n    The square brackets indicate that we are setting the component_article_variable to\n    receive the template\u2019s article local variable we declared inside our *for clause. Phew.... ;)\n    -->\n    <reddit-article *ng-for=\"#article of articleArray\" [component_article_variable]=\"article\"></reddit-article>\n  ",
            directives: [angular2_1.NgFor, RedditArticle] //Directive specifies the other components (an Array of classes) we want to be able to use in this view
        })
    ], RedditApp);
    return RedditApp;
}());
angular2_1.bootstrap(RedditApp);
