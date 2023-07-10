import React from 'react'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
    return <section className='p-4 m-4 bg-slate-100 rounded-lg shadow dark:bg-slate-800 align-center text-center  text-xl' >
        {children}
    </section>
}