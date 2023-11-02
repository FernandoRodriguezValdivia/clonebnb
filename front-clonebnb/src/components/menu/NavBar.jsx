import Link from "next/link";
import { UserButton } from "./UserButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const NavBar = async() => {
  const session = await getServerSession(authOptions)
  const token = session?.user?.data?.token

  return (
    <nav className="w-full fixed z-30 bg-white top-0 max-w-screen-2xl  flex flex-wrap gap-6 justify-between py-8 px-5 sm:p-8">
      <div className="flex w-56">
        <Link href="/">
          <div>
            <svg
              width="134"
              height="29"
              viewBox="0 0 134 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.50024 21.229L9.21401 8.54796C10.8331 5.88633 14.7389 6.01543 16.1786 8.77817L17.7242 11.744M37 16.5L29.2089 3.4919C27.6526 0.809628 23.7704 0.84234 22.2648 3.55343C20.6957 6.37898 19.0887 9.27915 17.7242 11.744M17.7242 11.744L21.076 18.1757L21.6518 19.397C25.6821 30.3888 8.98509 29.7781 13.5912 19.397L14.1122 18.2918C14.1487 18.2144 14.1834 18.1458 14.2248 18.0709C14.5191 17.5383 15.9065 15.0274 17.7242 11.744Z"
                stroke="#1F1F1F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M48.8842 22.6668C47.8062 22.6668 46.8402 22.4148 45.9862 21.9108C45.1322 21.4068 44.4532 20.7208 43.9492 19.8528C43.4592 18.9708 43.2142 17.9768 43.2142 16.8708C43.2142 15.7648 43.4592 14.7778 43.9492 13.9098C44.4532 13.0278 45.1322 12.3348 45.9862 11.8308C46.8402 11.3268 47.8062 11.0748 48.8842 11.0748C49.8782 11.0748 50.7882 11.2498 51.6142 11.5998C52.4542 11.9498 53.1192 12.4398 53.6092 13.0698L51.7822 15.2538C51.5862 15.0298 51.3552 14.8198 51.0892 14.6238C50.8232 14.4278 50.5292 14.2738 50.2072 14.1618C49.8852 14.0498 49.5492 13.9938 49.1992 13.9938C48.6672 13.9938 48.1982 14.1198 47.7922 14.3718C47.3862 14.6098 47.0712 14.9458 46.8472 15.3798C46.6232 15.8138 46.5112 16.3108 46.5112 16.8708C46.5112 17.4028 46.6232 17.8858 46.8472 18.3198C47.0852 18.7538 47.4072 19.0968 47.8132 19.3488C48.2192 19.6008 48.6812 19.7268 49.1992 19.7268C49.5632 19.7268 49.8992 19.6848 50.2072 19.6008C50.5152 19.5028 50.7952 19.3628 51.0472 19.1808C51.3132 18.9988 51.5582 18.7748 51.7822 18.5088L53.5882 20.7138C53.1122 21.3158 52.4472 21.7918 51.5932 22.1418C50.7532 22.4918 49.8502 22.6668 48.8842 22.6668ZM54.4056 22.4568V6.91679H57.7656V22.4568H54.4056ZM64.7575 22.6668C63.5955 22.6668 62.5595 22.4148 61.6495 21.9108C60.7535 21.4068 60.0395 20.7208 59.5075 19.8528C58.9895 18.9848 58.7305 17.9908 58.7305 16.8708C58.7305 15.7508 58.9895 14.7568 59.5075 13.8888C60.0395 13.0208 60.7535 12.3348 61.6495 11.8308C62.5595 11.3268 63.5955 11.0748 64.7575 11.0748C65.9195 11.0748 66.9485 11.3268 67.8445 11.8308C68.7545 12.3348 69.4685 13.0208 69.9865 13.8888C70.5045 14.7568 70.7635 15.7508 70.7635 16.8708C70.7635 17.9908 70.5045 18.9848 69.9865 19.8528C69.4685 20.7208 68.7545 21.4068 67.8445 21.9108C66.9485 22.4148 65.9195 22.6668 64.7575 22.6668ZM64.7575 19.7688C65.2615 19.7688 65.7095 19.6428 66.1015 19.3908C66.4935 19.1388 66.8015 18.7958 67.0255 18.3618C67.2495 17.9278 67.3545 17.4308 67.3405 16.8708C67.3545 16.3108 67.2495 15.8138 67.0255 15.3798C66.8015 14.9318 66.4935 14.5818 66.1015 14.3298C65.7095 14.0778 65.2615 13.9518 64.7575 13.9518C64.2535 13.9518 63.7985 14.0778 63.3925 14.3298C63.0005 14.5818 62.6925 14.9318 62.4685 15.3798C62.2445 15.8138 62.1395 16.3108 62.1535 16.8708C62.1395 17.4308 62.2445 17.9278 62.4685 18.3618C62.6925 18.7958 63.0005 19.1388 63.3925 19.3908C63.7985 19.6428 64.2535 19.7688 64.7575 19.7688ZM71.9106 22.4568V11.3058H75.1026L75.2076 13.5738L74.5356 13.8258C74.6896 13.3218 74.9626 12.8668 75.3546 12.4608C75.7606 12.0408 76.2436 11.7048 76.8036 11.4528C77.3636 11.2008 77.9516 11.0748 78.5676 11.0748C79.4076 11.0748 80.1146 11.2498 80.6886 11.5998C81.2626 11.9358 81.6966 12.4468 81.9906 13.1328C82.2846 13.8048 82.4316 14.6308 82.4316 15.6108V22.4568H79.0506V15.8838C79.0506 15.4358 78.9876 15.0648 78.8616 14.7708C78.7356 14.4768 78.5396 14.2598 78.2736 14.1198C78.0216 13.9658 77.7066 13.8958 77.3286 13.9098C77.0346 13.9098 76.7616 13.9588 76.5096 14.0568C76.2576 14.1408 76.0406 14.2738 75.8586 14.4558C75.6766 14.6238 75.5296 14.8198 75.4176 15.0438C75.3196 15.2678 75.2706 15.5128 75.2706 15.7788V22.4568H73.6116C73.2196 22.4568 72.8836 22.4568 72.6036 22.4568C72.3236 22.4568 72.0926 22.4568 71.9106 22.4568ZM89.5037 22.6668C88.2717 22.6668 87.2007 22.4218 86.2907 21.9318C85.3807 21.4278 84.6737 20.7488 84.1697 19.8948C83.6657 19.0268 83.4137 18.0398 83.4137 16.9338C83.4137 16.0798 83.5537 15.2958 83.8337 14.5818C84.1137 13.8678 84.5057 13.2518 85.0097 12.7338C85.5137 12.2018 86.1087 11.7958 86.7947 11.5158C87.4947 11.2218 88.2577 11.0748 89.0837 11.0748C89.8677 11.0748 90.5817 11.2148 91.2257 11.4948C91.8837 11.7748 92.4507 12.1668 92.9267 12.6708C93.4027 13.1748 93.7667 13.7698 94.0187 14.4558C94.2707 15.1418 94.3827 15.8908 94.3547 16.7028L94.3337 17.6058H85.4507L84.9677 15.7158H91.6037L91.2467 16.1148V15.6948C91.2187 15.3448 91.1067 15.0368 90.9107 14.7708C90.7287 14.4908 90.4837 14.2738 90.1757 14.1198C89.8677 13.9658 89.5177 13.8888 89.1257 13.8888C88.5797 13.8888 88.1107 14.0008 87.7187 14.2248C87.3407 14.4348 87.0537 14.7498 86.8577 15.1698C86.6617 15.5758 86.5637 16.0798 86.5637 16.6818C86.5637 17.2978 86.6897 17.8368 86.9417 18.2988C87.2077 18.7468 87.5857 19.0968 88.0757 19.3488C88.5797 19.6008 89.1747 19.7268 89.8607 19.7268C90.3367 19.7268 90.7567 19.6568 91.1207 19.5168C91.4987 19.3768 91.9047 19.1388 92.3387 18.8028L93.9137 21.0288C93.4797 21.4068 93.0177 21.7148 92.5277 21.9528C92.0377 22.1908 91.5337 22.3658 91.0157 22.4778C90.5117 22.6038 90.0077 22.6668 89.5037 22.6668ZM102.144 22.6878C101.64 22.6878 101.157 22.6178 100.695 22.4778C100.233 22.3378 99.8133 22.1488 99.4353 21.9108C99.0713 21.6728 98.7633 21.3998 98.5113 21.0918C98.2733 20.7698 98.1123 20.4408 98.0283 20.1048L98.7633 19.8528L98.5743 22.4358H95.4453V6.91679H98.8263V13.9728L98.1333 13.7208C98.2173 13.3568 98.3783 13.0208 98.6163 12.7128C98.8543 12.3908 99.1553 12.1108 99.5193 11.8728C99.8833 11.6208 100.282 11.4248 100.716 11.2848C101.15 11.1448 101.598 11.0748 102.06 11.0748C103.026 11.0748 103.88 11.3268 104.622 11.8308C105.378 12.3208 105.973 13.0068 106.407 13.8888C106.841 14.7568 107.058 15.7508 107.058 16.8708C107.058 18.0048 106.841 19.0128 106.407 19.8948C105.987 20.7628 105.406 21.4488 104.664 21.9528C103.922 22.4428 103.082 22.6878 102.144 22.6878ZM101.262 19.8528C101.766 19.8528 102.207 19.7268 102.585 19.4748C102.963 19.2228 103.25 18.8798 103.446 18.4458C103.656 17.9978 103.761 17.4728 103.761 16.8708C103.761 16.2828 103.656 15.7648 103.446 15.3168C103.25 14.8688 102.963 14.5258 102.585 14.2878C102.207 14.0498 101.766 13.9308 101.262 13.9308C100.744 13.9308 100.296 14.0498 99.9183 14.2878C99.5403 14.5258 99.2463 14.8688 99.0363 15.3168C98.8263 15.7648 98.7213 16.2828 98.7213 16.8708C98.7213 17.4728 98.8263 17.9978 99.0363 18.4458C99.2463 18.8798 99.5403 19.2228 99.9183 19.4748C100.296 19.7268 100.744 19.8528 101.262 19.8528ZM108.218 22.4568V11.3058H111.41L111.515 13.5738L110.843 13.8258C110.997 13.3218 111.27 12.8668 111.662 12.4608C112.068 12.0408 112.551 11.7048 113.111 11.4528C113.671 11.2008 114.259 11.0748 114.875 11.0748C115.715 11.0748 116.422 11.2498 116.996 11.5998C117.57 11.9358 118.004 12.4468 118.298 13.1328C118.592 13.8048 118.739 14.6308 118.739 15.6108V22.4568H115.358V15.8838C115.358 15.4358 115.295 15.0648 115.169 14.7708C115.043 14.4768 114.847 14.2598 114.581 14.1198C114.329 13.9658 114.014 13.8958 113.636 13.9098C113.342 13.9098 113.069 13.9588 112.817 14.0568C112.565 14.1408 112.348 14.2738 112.166 14.4558C111.984 14.6238 111.837 14.8198 111.725 15.0438C111.627 15.2678 111.578 15.5128 111.578 15.7788V22.4568H109.919C109.527 22.4568 109.191 22.4568 108.911 22.4568C108.631 22.4568 108.4 22.4568 108.218 22.4568ZM127.197 22.6878C126.693 22.6878 126.21 22.6178 125.748 22.4778C125.286 22.3378 124.866 22.1488 124.488 21.9108C124.124 21.6728 123.816 21.3998 123.564 21.0918C123.326 20.7698 123.165 20.4408 123.081 20.1048L123.816 19.8528L123.627 22.4358H120.498V6.91679H123.879V13.9728L123.186 13.7208C123.27 13.3568 123.431 13.0208 123.669 12.7128C123.907 12.3908 124.208 12.1108 124.572 11.8728C124.936 11.6208 125.335 11.4248 125.769 11.2848C126.203 11.1448 126.651 11.0748 127.113 11.0748C128.079 11.0748 128.933 11.3268 129.675 11.8308C130.431 12.3208 131.026 13.0068 131.46 13.8888C131.894 14.7568 132.111 15.7508 132.111 16.8708C132.111 18.0048 131.894 19.0128 131.46 19.8948C131.04 20.7628 130.459 21.4488 129.717 21.9528C128.975 22.4428 128.135 22.6878 127.197 22.6878ZM126.315 19.8528C126.819 19.8528 127.26 19.7268 127.638 19.4748C128.016 19.2228 128.303 18.8798 128.499 18.4458C128.709 17.9978 128.814 17.4728 128.814 16.8708C128.814 16.2828 128.709 15.7648 128.499 15.3168C128.303 14.8688 128.016 14.5258 127.638 14.2878C127.26 14.0498 126.819 13.9308 126.315 13.9308C125.797 13.9308 125.349 14.0498 124.971 14.2878C124.593 14.5258 124.299 14.8688 124.089 15.3168C123.879 15.7648 123.774 16.2828 123.774 16.8708C123.774 17.4728 123.879 17.9978 124.089 18.4458C124.299 18.8798 124.593 19.2228 124.971 19.4748C125.349 19.7268 125.797 19.8528 126.315 19.8528Z"
                fill="#1F1F1F"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex gap-12 w-full sm:w-6/12 justify-between items-center">
        <div className="flex gap-2 items-center text-sm">
          <Link
            className="inline-block py-1 px-3 hover:bg-green hover:text-white hover:border-green rounded-2lg border transition duration-200 ease-linear"
            href="/"
          >
            Home
          </Link>
          {
            token && 
            <Link
              className="inline-block py-1 px-3 hover:bg-green hover:text-white hover:border-green rounded-2lg border transition duration-200 ease-linear"
              href="/wishlist"
            >
              Wishlist
            </Link>
          }
        </div>
        <div>
          <UserButton/>
        </div>
      </div>
    </nav>
  );
}