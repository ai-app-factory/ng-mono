import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab, TabsComponent } from '@ng-mono/mui-lib';
import { CardComponent } from '@ng-mono/mui-lib';

@Component({
  selector: 'lib-course-info',
  standalone: true,
  imports: [
    CommonModule,
    TabsComponent,
    CardComponent
  ],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.scss',
})
export class CourseInfoComponent {

  courseTabs: Tab[] = [
    { label: 'What You will learn', content: 'Course Details' },
    { label: 'Modules', content: 'Course Content' },
    { label: 'Reviews', content: '' }
  ];

  reviews = [
    { title: 'Great Course', subtitle: 'John Doe', content: 'This course was very informative and well-structured.' },
    { title: 'Highly Recommend', subtitle: 'Jane Smith', content: 'I learned a lot from this course. Highly recommend it!' },
    { title: 'Good Content', subtitle: 'Alice Johnson', content: 'The content was good, but could use more examples.' }
  ];

}
