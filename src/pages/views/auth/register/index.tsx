import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.scss";

const TampilanRegister = () => {
    const { push } = useRouter();

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        push("/auth/login");
    };

    return (
        <div className={styles.register}>
            <div className={styles.card}>
                <h1>Buat Akun</h1>
                <p className={styles.subtitle}>Daftar untuk mulai menggunakan aplikasi</p>

                <form onSubmit={handleRegister}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nama Lengkap</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="contoh@email.com"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Masukkan password"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Konfirmasi Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Ulangi password"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.btnRegister}>
                        Daftar
                    </button>
                </form>

                <p className={styles.loginLink}>
                    Sudah punya akun? <Link href="/auth/login">Masuk di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanRegister;
