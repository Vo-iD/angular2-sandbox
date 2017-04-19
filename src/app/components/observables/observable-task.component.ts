import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import * as Rx from "rxjs/Rx";

@Component({
    selector: 'observable-task',
    templateUrl: 'app/components/observables/observable-task.component.html'
})

export class ObservableTaskComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            search: []
        });
        
        var search = this.form.find('search');
        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '-'))
            .subscribe(x => console.log(x));
/*
        var observable = Rx.Observable.fromArray([1, 2, 3]);

        var startDates = [];
        var startDate = new Date();

        for(var day = -2; day <= 2; day++) {
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
            );

            startDates.push(date);
        }*/

    /*    Rx.Observable
            .fromArray(startDates)
            .map(date => {
                console.log("Getting deals for the date " + date)
                return [1, 2, 3];
            })
            .subscribe(x => console.log(x));*/

/*
        var intervalObservable = Rx.Observable.interval(1000);
        intervalObservable
            .flatMap(x => {
                console.log('calling the server to get the latest news');
                return Rx.Observable.of([1, 2, 3]);
            })
            .subscribe(x => console.log(x));*/

 /*       var userStream = Rx.Observable.of({
            userId: 1, 
            userName: 'John'
        }).delay(500);

        var tweetsStream = Rx.Observable.of([1, 2, 3]).delay(1500);*/

/*        Rx.Observable
            .forkJoin(userStream, tweetsStream)
            .map(joined => new Object({user: joined[0], tweets: joined[1]}))
            .subscribe(
                result => console.log(result)
            );

        var errorObs = Rx.Observable.throw(new Error("Something failed"));

        errorObs.subscribe(
            result => console.log(result),
            error => console.error(error));
  */  
        var counter = 0;
        var ajaxCall = Rx.Observable.of('url')
            .flatMap(() => {
                if(++counter < 2)
                    return Rx.Observable.throw(new Error("Request failed"));

                return Rx.Observable.of([5, 10]);
            });

        ajaxCall
            .retry(3)
            .subscribe(
                x => console.log(x),
                error => console.error(error));
    }
}