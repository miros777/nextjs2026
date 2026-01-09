'use client';

import React, {useActionState} from 'react';
import {saveCar} from "@/server-actions/saveCar";
import Form from "next/form";

const FormComponentCreateNewCar = () => {
    const [state, formAction] = useActionState(saveCar, null);

    return (
        <div>

            <h2>Form to created new cat to our SQLITE DB</h2>
            <Form action={formAction}>
                <input type="text" name="brand" placeholder="brand" />
                <input type="number" name="price" placeholder="price" />
                <input type="number" name="year" placeholder="year" />
                <button type="submit">Add Car</button>
            </Form>

            {/* Відображення помилок, якщо вони є */}
            {state?.errors && (
                <div style={{ color: 'red' }}>
                    {state.errors.map(err => (
                        <p key={err.path.join('.')}>{err.message}</p>
                    ))}
                </div>
            )}

        </div>
    );
};

export default FormComponentCreateNewCar;