import React from 'react';
import { render, fireEvent, screen, waitFor, userEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import testShowData from './testdata'
import { mockComponent } from 'react-dom/test-utils';
import fetchShow from '../../api/fetchShow'

jest.mock('../../api/fetchShow')

test('renders without errors with no props', async () => { 
    render(<Display/>)
 });

test('renders Show component when the button is clicked ', async () => { 
    render(<Display/>)
    fetchShow.mockResolvedValueOnce(testShowData)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const show = await screen.findByTestId('show-container')
    await waitFor(() =>expect(show).toBeInTheDocument())
 });

test('renders show season options matching your data when the button is clicked', async () => { 
    render(<Display/>)
    fetchShow.mockResolvedValueOnce(testShowData)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const seasons = await screen.findAllByTestId('season-option')
    await waitFor(() =>expect(seasons).toHaveLength(2))
 });
