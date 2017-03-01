import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

let component: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp],

            providers: [

            ],

            imports: [
                IonicModule.forRoot(MyApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;

    });

    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    it('is created', () => {

        expect(fixture).toBeTruthy();
        expect(component).toBeTruthy();

    });

    it('initialises with a root page of Page1', () => {
        expect(component['rootPage']).toBe(Page1);
    });

});
