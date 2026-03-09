export function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-white px-5 py-5 block inset-shadow-sm md:flex md:justify-between">
           <ul className="flex gap-2 text-gray-600">
            <li> &copy;{year} HomeHives</li>
            <li>ALL rights reserved</li>
           </ul>
           <ul className="flex gap-2 text-gray-600 list-disc gap-5">
            <p>Privacy</p>
            <p>Terms of service</p>
            <p>Support</p>
           </ul>
        </footer>
    )
}