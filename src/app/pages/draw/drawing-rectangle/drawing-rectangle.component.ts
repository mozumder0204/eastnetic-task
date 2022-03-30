import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2,
}

@Component({
  selector: 'app-drawing-rectangle',
  templateUrl: './drawing-rectangle.component.html',
  styleUrls: ['./drawing-rectangle.component.scss'],
})
export class DrawingRectangleComponent implements OnInit {
  data: any = {
    x: 10,
    y: 10,
    width: 200,
    height: 200,
    rx: 10,
    ry: 10,
  };

  @Input('width') public width: number;
  @Input('height') public height: number;
  @Input('left') public left: number;
  @Input('top') public top: number;

  @ViewChild('box') public box: ElementRef;
  private boxPosition: { left: number; top: number };
  public containerPos: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  };
  public mouse: { x: number; y: number };
  public status: Status = Status.OFF;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadBox();
    this.loadContainer();
  }

  private loadBox() {
    const { left, top } = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  private loadContainer() {
    const left = this.boxPosition.left;
    const top = this.boxPosition.top;
    const right = 500;
    const bottom = 500;
    this.containerPos = { left, top, right, bottom };
  }

  setStatus(event: MouseEvent, status: number) {
    if (status == 1) {
      event.stopPropagation();
    }
    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };
    if (this.status === Status.RESIZE) {
      this.resize();
    }
  }

  private resize() {
    if (this.resizeCondMeet()) {
      this.data.width = Number(this.mouse.x > this.boxPosition.left)
        ? this.mouse.x - this.boxPosition.left
        : 0;
      this.data.height = Number(this.mouse.y > this.boxPosition.top)
        ? this.mouse.y - this.boxPosition.top
        : 0;
    }
  }

  private resizeCondMeet() {
    return this.mouse.x <= 564 && this.mouse.y <= 620;
  }
}
