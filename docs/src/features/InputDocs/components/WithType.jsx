import { Input } from 'friendly-components';
import React, { useState } from 'react';

const WithType = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [month, setMonth] = useState('');
  const [week, setWeek] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        width: 200,
        margin: 'auto',
        gap: 16
      }}
    >
      <Input
        value={text}
        onChange={setText}
        placeholder="Type text"
        type="text"
      />
      <Input
        value={number}
        onChange={setNumber}
        placeholder="Type number"
        type="number"
      />
      <Input
        value={password}
        onChange={setPassword}
        placeholder="Type password"
        type="password"
      />
      <Input
        value={date}
        onChange={setDate}
        placeholder="Type date"
        type="date"
      />
      <Input
        value={time}
        onChange={setTime}
        placeholder="Type time"
        type="time"
      />
      <Input
        value={month}
        onChange={setMonth}
        placeholder="Type month"
        type="month"
      />
      <Input
        value={week}
        onChange={setWeek}
        placeholder="Type week"
        type="week"
      />
    </div>
  );
};

export default WithType;

export const withTypeCode = `
import { Input } from 'friendly-components';
import React, { useState } from 'react';

const WithType = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [month, setMonth] = useState('');
  const [week, setWeek] = useState('');

  return (
    <div style={{ display: 'flex', flexFlow: 'column', width: 200, margin: 'auto', gap: 16 }} >
      <Input value={text} onChange={setText} placeholder="Type text" type="text" />
      <Input value={number} onChange={setNumber} placeholder="Type number" type="number" />
      <Input value={password} onChange={setPassword} placeholder="Type password" type="password" />
      <Input value={date} onChange={setDate} placeholder="Type date" type="date" />
      <Input value={time} onChange={setTime} placeholder="Type time" type="time" />
      <Input value={month} onChange={setMonth} placeholder="Type month" type="month" />
      <Input value={week} onChange={setWeek} placeholder="Type week" type="week" />
    </div>
  );
};
`;
