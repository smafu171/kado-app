import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Diagnose() {
  const [birth, setBirth] = useState({ year: '', month: '', day: '' });
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const countCorners = (digit: string) => {
    const table: { [key: string]: number } = {
      '0': 0, '1': 0, '2': 1, '3': 1,
      '4': 5, '5': 2, '6': 1, '7': 2,
      '8': 4, '9': 1
    };
    return digit.split('').reduce((sum, d) => sum + (table[d] || 0), 0);
  };

  const handleDiagnose = () => {
    const total = countCorners(birth.year + birth.month + birth.day);
    navigate('/result', {
      state: {
        name: name,
        kado: total
      }
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#fdf5e6",
      color: "#222",
      fontFamily: "'Shippori Mincho B1', serif",
      paddingTop: "3rem",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "2rem" }}>角診断フォーム</h1>

      <div style={{
        width: "fit-content",
        margin: "0 auto",
        fontSize: "1rem",
        lineHeight: "2",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem"
      }}>
        <div>
          <label>名前：</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "120px",
              padding: "0.5rem",
              fontSize: "1.1rem",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        <div>
          <label>生年月日：</label><br />
          <input
            type="date"
            value={`${birth.year}-${birth.month}-${birth.day}`}
            onChange={(e) => {
              const [y, m, d] = e.target.value.split('-');
              setBirth({ year: y, month: m, day: d });
            }}
            style={{
              width: "120px",
              padding: "0.5rem",
              fontSize: "1.1rem",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        <button
          onClick={handleDiagnose}
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1rem",
            backgroundColor: "#fff",
            color: "#000",
            border: "2px solid #333",
            borderRadius: "6px",
            fontFamily: "'Shippori Mincho B1', serif",
            cursor: "pointer",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.15)",
            alignSelf: "center"
          }}
        >
          カドる
        </button>
      </div>
    </div>
  );
}
