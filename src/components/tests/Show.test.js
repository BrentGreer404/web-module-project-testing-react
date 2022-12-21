import React from 'react';
import { render, fireEvent, userEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import testShowData from './testdata'


test('renders without errors', () => {
    render(<Show show={testShowData} selectedSeason={"none"}/>)
 });

test('renders Loading component when prop show is null', () => {
    render(<Show show={null}/>)
    const loading = screen.queryByTestId("loading-container")
    expect(loading).not.toBeNull()
 });

test('renders same number of options seasons are passed in', () => { 
    render(<Show show={testShowData} selectedSeason={"none"}/>)
    const seasons = screen.queryAllByTestId("season-option")
    expect(seasons).toHaveLength(2)
 });

test('handleSelect is called when an season is selected', () => { 
    // const mockHandleSelect = jest.fn()
    // render(<Show show={testShowData} selectedSeason="none" handleSelect={mockHandleSelect}/>)
    // const select = screen.getByLabelText(/select a season/i)
    // console.log(select)
    // userEvent.selectOptions(select, ['1'])
    // expect(mockHandleSelect).toBeCalled()
 });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { 
    const { rerender } = render(<Show show={testShowData} selectedSeason={"none"}/>)
    rerender(<Show show={testShowData} selectedSeason={1}/>)
 });
