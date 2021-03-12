import React from "react";
import { screen, render } from "@testing-library/react";
import fireEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {

    const onSubmit = jest.fn();
    const { getByTestId } = render (<CheckoutForm onSubmit={onSubmit}/>);

    const nameFirst = screen.getByLabelText(/First Name:/i);
    userEvent.type(nameFirst, "camille");
    const nameLast = screen.getByLabelText(/Last Name:/i);
    userEvent.type(nameLast, "franklin");
    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "1234 first road");
    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, "birmingham");
    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, "alabama");
    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, "33333");
    

    fireEvent.click(getByTestId("form"));

    expect(screen.getByTestId('successMessage')).toBeVisible();
});
