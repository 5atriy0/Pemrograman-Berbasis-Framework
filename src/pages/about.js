import Link from "next/link";

export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About</h1>
      <div style={{ marginTop: '20px' }}>
        <p>
          <strong>Nama Mahasiswa:</strong> Satriyo Bagus Susianto
        </p>
        <p>
          <strong>NIM:</strong> 2341720249
        </p>
        <p>
          <strong>Program Studi:</strong> D-IV Teknik Informatika
        </p>
      </div>
    <Link href="/">
        Home
    </Link>
    </div>
  );
}
