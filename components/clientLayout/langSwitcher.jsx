import { TranslateTwoTone } from '@mui/icons-material'
import { MdOutlineGTranslate } from "react-icons/md";
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangSwitcher = () => {
  const { locale, asPath } = useRouter()

  return (
    <>
      <Link passHref href={asPath} locale={locale === 'en' ? 'ar' : 'en'} scroll={false}>
        <button
          aria-label='LangSwitcher'
          className='p-2  cursor-pointer rounded-lg '
        >
          <MdOutlineGTranslate className=' w-12  text-black h-12'/>
          {/* <TranslateTwoTone className='h-5 w-5' /> */}
        </button>
      </Link>
    </>
  )
}

export default LangSwitcher
