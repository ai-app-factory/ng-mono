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
}

@Component({
  selector: 'lib-tree',
  standalone: true,
  imports: [
    CommonModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  @Input() displayTreeLabel: boolean = true;
  @Input() treeLabel: string = 'Tree Structure';
  @Input() treeType: 'nested' | 'flat' = 'nested';

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
      ]
    }, 
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [
            { name: 'Broccoli' },
            { name: 'Brussels sprouts' },
          ]
        }, {
          name: 'Orange',
          children: [
            { name: 'Pumpkins' },
            { name: 'Carrots' },
          ]
        }
      ]
    }
  ]);


  @Output() nodeSelectionChange = new EventEmitter<TreeNode>();

  childrenAccessor = (node: TreeNode) => node.children ?? [];

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

}