import Link from 'next/link';

export default function Page() {
  const diensten = [
    {title:'Amazon roestherstel & plaatwerk', img:'/img/ph1.svg', desc:'Vaste prijs roestcheck met lasplan en fotorapportage. Dorpels, wielranden, vloeren.'},
    {title:'Onderhoud Volvo 200 & 900',       img:'/img/ph2.svg', desc:'Kleine/grote beurt, remmen, distributie. OEM-onderdelen, duidelijke offertes.'},
    {title:'Airco & Elektronica',             img:'/img/ph3.svg', desc:'Diagnose en reparatie (o.a. 940). Lektest, vullen, bedrading fixes.'},
    {title:'Redblock service & tuning',       img:'/img/ph4.svg', desc:'B18/B20/B21/B23/B230: kleppen, carburateurs (SU/Stromberg), 123Ignition.'},
    {title:'Onderdelen & revisie',            img:'/img/ph5.svg', desc:'Revisie-onderdelen (omruil), voorraad remdelen, rubbers, pakkingen.'},
    {title:'Workshops & stalling',            img:'/img/ph6.svg', desc:'Sleuteldagen & winterstalling. Beperkte plekken.'}
  ];
  const projecten = [
    {title:'Volvo Amazon – dorpels & vloer', img:'/img/ph1.svg', desc:'Deelrestauratie met OEM-plaatwerk, fotolog & rapport. Doorlooptijd: 6 weken.'},
    {title:'Volvo 940 – airco & remmen',     img:'/img/ph2.svg', desc:'Compleet onderhoud + airco-reparatie, testrit & opleverchecklist.'},
    {title:'Redblock – carb & ontsteking',   img:'/img/ph3.svg', desc:'SU-revisie, ontstekingscurve optimalisatie en afsteltijd op de bank/weg.'}
  ];
  return (
    <>
      <section className='grid md:grid-cols-2 gap-6 py-12'>
        <div>
          <div className='kicker'>Volvo klassieker & youngtimer specialist</div>
          <h1 className='text-3xl md:text-5xl font-semibold mt-1'>
            Iconic Classic Cars
          </h1>
          <p className='text-neutral-600 mt-2'>
            Restauratie en onderhoud voor Volvo Amazon, 100, 200, 400 en 900 series. Transparante prijzen,
            fotorapportage en liefde voor detail. Zuidland / Voorne-Putten.
          </p>
          <div className='flex gap-2 flex-wrap mt-3'>
            <span className='border rounded-full px-3 py-1 text-sm'>Roest &amp; plaatwerk</span>
            <span className='border rounded-full px-3 py-1 text-sm'>Onderhoud 200/900</span>
            <span className='border rounded-full px-3 py-1 text-sm'>Airco &amp; elektra</span>
            <span className='border rounded-full px-3 py-1 text-sm'>Onderdelen &amp; revisie</span>
          </div>
          <div className='flex gap-3 mt-4'>
            <a className='btn btn-primary' href='/contact'>Plan roestcheck</a>
            <a className='btn btn-ghost' href='/diensten'>Bekijk diensten</a>
          </div>
        </div>
        <div>
          <div className='w-full h-full flex items-center justify-center bg-white/0'>
  <img src='/logo-icc.png' alt='Iconic Classic Cars logo' style={{ maxHeight: 440, width: 'auto' }} />
</div>
        </div>
      </section>

      <section id='diensten' className='section'>
        <h2 className='text-2xl font-semibold mb-4'>Diensten</h2>
        <div className='grid-3'>
          {diensten.map((c) => (
            <article className='card' key={c.title}>
              <img src={c.img} alt={c.title} />
              <div className='p-4'>
                <h3 className='font-semibold'>{c.title}</h3>
                <p className='text-neutral-600'>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id='projecten' className='section'>
        <h2 className='text-2xl font-semibold mb-4'>Projecten & Cases</h2>
        <div className='grid-3'>
          {projecten.map((c) => (
            <article className='card' key={c.title}>
              <img src={c.img} alt={c.title} />
              <div className='p-4'>
                <h3 className='font-semibold'>{c.title}</h3>
                <p className='text-neutral-600'>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

