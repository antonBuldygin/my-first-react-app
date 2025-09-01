import React from 'react';
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved
} from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleButton from './App';


test('проверяет	Компонент ToggleButton',  () => {
    render(<ToggleButton/>);
    const element1 = screen.getByText(/Выключено/i); // Ищем текст
    expect(element1).toBeInTheDocument();
    fireEvent.click(element1);
    const element = screen.getByText(/Включено/i); // Ищем текст
    expect(element).toBeInTheDocument();

});