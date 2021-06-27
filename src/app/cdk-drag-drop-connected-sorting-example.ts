import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem,copyArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log("CdkDragDropConnectedSortingExample drop event ",event);
    console.log("event.previousContainer.data ",event.previousContainer.data)
    console.log("event.container.data ",event.container.data)
    if (event.previousContainer === event.container) {
      console.log("in if")
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("in else")
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);


                        console.log("41 todo ",this.todo)
                        console.log("42 done ",this.done)
    }
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */