import React from 'react';

const NotFound: React.FC = () => {
    return (
        <main className="grid min-h-full place-items-center bg-[--bg] px-6 py-24 sm:py-32 lg:px-8 text-[--text]">
          <div className="text-center">
            <p className="text-base font-semibold text-[--highlighted-text]">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-[--highlighted-text] px-3.5 py-2.5 text-sm font-semibold text-[--text] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:translate-y-0.5 hover:shadow-md hover:brightness-125"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
    );
}

export default NotFound;