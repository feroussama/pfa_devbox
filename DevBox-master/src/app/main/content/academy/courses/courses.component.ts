import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AcademyCoursesService } from '../courses.service';

@Component({
  selector: 'fuse-academy-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class FuseAcademyCoursesComponent implements OnInit, OnDestroy {
  categories: any[];
  courses: any[];
  coursesFilteredByCategory: any[];
  filteredCourses: any[];

  categoriesSubscription: Subscription;
  coursesSubscription: Subscription;

  currentCategory = 'all';
  searchTerm = '';

  constructor(
  ) {
    this.courses = [{
      'id': '15459251a6d6b397565',
      'title': 'Basics of Angular',
      'slug': 'basics-of-angular',
      'category': 'web',
      'length': 30,
      'updated': 'Jun 28, 2017'
    },
      {
        'id': '154588a0864d2881124',
        'title': 'Basics of TypeScript',
        'slug': 'basics-of-typeScript',
        'category': 'web',
        'length': 60,
        'updated': 'Nov 01, 2017'
      }];
    this.categories = [{
      'id': 0,
      'value': 'web',
      'label': 'Web'
    },
      {
        'id': 1,
        'value': 'firebase',
        'label': 'Firebase'
      },
      {
        'id': 2,
        'value': 'cloud',
        'label': 'Cloud'
      }];
  }

  ngOnInit() {
    // Subscribe to categories
    // this.categoriesSubscription =
    //   this.coursesService.onCategoriesChanged
    //     .subscribe(categories => {
    //       this.categories = categories;
    //     },err=>{
    //       console.log("3asba");
          
    //     });

    // // Subscribe to courses
    // this.coursesSubscription =
    //   this.coursesService.onCoursesChanged
    //     .subscribe(courses => {
    //       this.filteredCourses = this.coursesFilteredByCategory = this.courses = courses;
    //     });
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
    this.coursesSubscription.unsubscribe();
  }

  filterCoursesByCategory() {
    // Filter
    if (this.currentCategory === 'all') {
      this.coursesFilteredByCategory = this.courses;
      this.filteredCourses = this.courses;
    }
    else {
      this.coursesFilteredByCategory = this.courses.filter((course) => {
        return course.category === this.currentCategory;
      });

      this.filteredCourses = [...this.coursesFilteredByCategory];

    }

    // Re-filter by search term
    this.filterCoursesByTerm();
  }

  filterCoursesByTerm() {
    const searchTerm = this.searchTerm.toLowerCase();

    // Search
    if (searchTerm === '') {
      this.filteredCourses = this.coursesFilteredByCategory;
    }
    else {
      this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
        return course.title.toLowerCase().includes(searchTerm);
      });
    }
  }
}
