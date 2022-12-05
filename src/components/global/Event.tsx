import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Event = () => {
  const router = useRouter();
  const [pathname, setPathname] = useState<Array<string> | undefined>();
  useEffect(() => {
    if (router.isReady) setPathname(router.asPath.split('/'));
  }, [router]);

  if (
    pathname &&
    pathname[1] !== 'mint' &&
    pathname &&
    pathname[1] !== 'document'
  ) {
    return (
      <div className="bg-green text-center fixed w-full z-[998] h-[70px]">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
          <div className="text-white italic font-bold text-lg">
            Our Show Unit Is Open
          </div>
          <Link
            href="/profile"
            className="text-dark-blue font-semibold underline cursor-pointer"
          >
            Visit Now!
          </Link>
        </div>
      </div>
    );
  }
  return null;
};

export default Event;
