import {MainLayout} from "./MainLayout";
import {render, RenderResult, screen} from '@testing-library/react';


describe('MainLayout component', () => {
    let component: RenderResult;
    beforeEach(() => {
        component = render(<MainLayout/>);
    })

    test('should render', () => {
        expect(component).toBeTruthy();
    });

    test('should have header', () => {
        expect(component.getByTestId('header')).toBeTruthy();
    });

    test('should have sidebar', () => {
        expect(component.getByTestId('sidebar')).toBeTruthy();
    });

    test('should have sidebar', () => {
        expect(component.getByTestId('content')).toBeTruthy();
    });

})