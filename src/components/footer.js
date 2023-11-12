import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <footer className="bg-white font-headings">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-16 lg:px-8">
                <div className="flex flex-col gap-5 lg:gap-2">
                    <div className="text-2xl font-medium text-gray-900">
                        &#169; 2022 InvestEazy
                    </div>
                    <div className="text-xl font-normal text-gray-500 inline-block lg:pl-6">
                        <div className="inline-block cursor-pointer pr-3 pb-1 lg:pb-0">
                            Privacy Policy
                        </div>
                        <div className="inline-block cursor-pointer pr-3">
                            Terms of Use
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 hover:bg-artic-blue transition-all rounded-md mx-2 cursor-pointer">
                            <FacebookIcon style={{ fontSize: 56 }} color='primary' />
                        </div>
                        <div className="p-2 hover:bg-artic-blue transition-all rounded-md mx-2 cursor-pointer">
                            <InstagramIcon style={{ fontSize: 56 }} sx={{ color: "#E4405F"}} />
                        </div>
                        <div className="p-2 hover:bg-artic-blue transition-all rounded-md mx-2 cursor-pointer">
                            <LinkedInIcon style={{ fontSize: 56 }} color='primary' />
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}