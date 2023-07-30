import React from 'react';

const Doctors = () => {
    const doctorsData = [
        { name: 'Dr. John Smith', specialty: 'IVF Specialist' },
        { name: 'Dr. Jane Doe', specialty: 'Gynecologist' },
        { name: 'Dr. Michael Johnson', specialty: 'Maternity Specialist' },
        { name: 'Dr. Emily Williams', specialty: 'Fertility Specialist' },
    ];

    return (
        <div>
            <h2>Our Doctors</h2>
            <ul>
                {doctorsData.map((doctor, index) => (
                    <li key={index}>
                        <strong>{doctor.name}</strong> - {doctor.specialty}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Doctors;
