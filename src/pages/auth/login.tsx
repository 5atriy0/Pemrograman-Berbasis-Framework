import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        document.cookie = "isLogin=true; path=/";
        push('/produk');
    }
    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handlerLogin}>Login</button> <br />
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default halamanLogin;