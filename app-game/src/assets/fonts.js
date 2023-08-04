import {Saira, Righteous } from "next/font/google"

const righteous = Righteous({
    subsets: ['latin-ext'],
    weight: ['400'],
});

const saira = Saira({
    subsets: ['latin'],
    weight: ['100','200','300','400', '500', '600', '700', '800', '900']
})



const Fonts = {
    righteous: righteous.className,
    saira: saira.className
};

export default Fonts;