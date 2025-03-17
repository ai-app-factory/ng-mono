/* 
Add level accessor
TreeControl is a utility provided by Angular Material that helps manage the state of a tree component, 
such as the expansion and collapse of nodes. It provides methods and properties to control the tree's behavior 
and structure. Do we need it? If we use treecontrol we will have problems with accessibility.
How are we going to connect datasource
Can we control the expansion/collapse of a single node
*/



import { 
  Component,
  signal,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
  Output 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface TreeNode {
  name: string;
  children?: TreeNode[];
  isExpandable?: boolean;
}

@Component({
  selector: 'lib-tree',
  standalone: true,
  imports: [
    CommonModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  @Input() displayTreeLabel: boolean = true;
  @Input() treeLabel: string = 'Tree Structure';
  @Input() treeType: 'nested' | 'flat' = 'nested';
  @Input() initialExpanded: boolean = false;

  @Input() set nodes(nodes: TreeNode[]) {
    this._nodes.set(nodes);
  }

  protected _nodes = signal<TreeNode[]>([
    {
      name: 'Fruit',
      children: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Fruit loops' },
      ],
    }, 
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [
            { name: 'Broccoli' },
            { name: 'Brussels sprouts' },
          ],
        }, {
          name: 'Orange',
          children: [
            { name: 'Pumpkins' },
            { name: 'Carrots' },
          ],
        }
      ],
    }
  ]);


  @Output() nodeSelectionChange = new EventEmitter<TreeNode>();

  childrenAccessor = (node: TreeNode) => node.children ?? [];

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

}