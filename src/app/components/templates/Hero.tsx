import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import {Button as But} from "@/app/components/ui/button"
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '@/Section';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

 const Hero = () => {
  const {isSignedIn} = useAuth()
  return(
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
     {!isSignedIn && (<NavbarTwoColumns logo={<Logo xl />}>
        <div className='flex items-center gap-2'>
        <li>
          <But>
          <Link href="/sign-in">
          SignIn
          </Link>
          </But>
        </li>
        <But>
        <li>
          <Link href="/sign-up">Log Out</Link>
        </li>
        </But>
        </div>
      </NavbarTwoColumns>)}
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Master todo app \n'}
            <span className="text-primary-500">for the self improvement seeker </span>
          </>
        }
        description="Master todo is more than a todo app."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Create your first todo today </Button>
          </Link>
        }
      />
    </Section>
  </Background>
);
      }

export { Hero };
