import Script from 'next/script'
import { getTranslations } from 'next-intl/server'
import { ProjectCard } from './ProjectCard'

interface CodeLink {
  label: string
  url: string
}

interface ProjectItem {
  id: string
  title: string
  description: string
  tags: string[]
  challenge: string
  codeUrls: CodeLink[]
  imageUrl: string
}

const carouselScript = `
(function () {
  var wrapper = document.getElementById('carousel-wrapper');
  var track = document.getElementById('carousel-track');
  if (!wrapper || !track) return;
  var total = track.children.length;
  if (total < 2) return;
  var dots = document.querySelectorAll('[data-carousel-dot]');
  var current = 0;
  var timer = null;
  var INTERVAL = 5000;

  function slideWidth() { return wrapper.offsetWidth; }

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = 'translateX(-' + (current * slideWidth()) + 'px)';
    dots.forEach(function (dot, i) {
      dot.style.width = i === current ? '1.25rem' : '0.5rem';
      dot.style.opacity = i === current ? '1' : '0.3';
    });
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
  }

  window.addEventListener('resize', function () {
    track.style.transform = 'translateX(-' + (current * slideWidth()) + 'px)';
  });

  document.getElementById('carousel-prev').addEventListener('click', function () {
    goTo(current - 1); startTimer();
  });
  document.getElementById('carousel-next').addEventListener('click', function () {
    goTo(current + 1); startTimer();
  });
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goTo(parseInt(dot.getAttribute('data-carousel-dot'), 10)); startTimer();
    });
  });

  startTimer();
})();
`

export async function ProjectsSection() {
  const t = await getTranslations('projects')
  const commonT = await getTranslations('common')

  const items = t.raw('items') as ProjectItem[]

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-16">
      <header className="mb-16 md:mb-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-primary"></div>
          <span className="font-label text-primary text-xs uppercase tracking-[0.3em]">
            {commonT('worksLabel')}
          </span>
          <div className="h-px w-8 bg-primary"></div>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
          {t('title')}{' '}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('titleHighlight')}
          </span>
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed">
          {t('subtitle')}
        </p>
      </header>

      <div>
        {/* overflow-hidden aqui (wrapper), não no track — o track é quem se move */}
        <div id="carousel-wrapper" className="relative overflow-hidden">
          <div
            id="carousel-track"
            className="flex"
            style={{ transition: 'transform 0.5s ease-in-out' }}
          >
            {items.map((item, index) => (
              <div key={item.id} className="flex-none w-full">
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                  challenge={item.challenge}
                  codeUrls={item.codeUrls}
                  imageUrl={item.imageUrl}
                  challengeLabel={t('challenge')}
                  reversed={index % 2 !== 0}
                />
              </div>
            ))}
          </div>

          {items.length > 1 && (
            <>
              <button
                id="carousel-prev"
                aria-label={t('prevSlide')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-surface-container-high/80 backdrop-blur border border-outline-variant/20 flex items-center justify-center hover:bg-white/10 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-on-surface">chevron_left</span>
              </button>
              <button
                id="carousel-next"
                aria-label={t('nextSlide')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-surface-container-high/80 backdrop-blur border border-outline-variant/20 flex items-center justify-center hover:bg-white/10 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-on-surface">chevron_right</span>
              </button>
            </>
          )}
        </div>

        {items.length > 1 && (
          <>
            <div className="flex justify-center gap-3 mt-8">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  data-carousel-dot={String(i)}
                  aria-label={item.title}
                  className="h-2 rounded-full bg-primary transition-all duration-300"
                  style={{ width: i === 0 ? '1.25rem' : '0.5rem', opacity: i === 0 ? 1 : 0.3 }}
                />
              ))}
            </div>

            <Script
              id="carousel-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: carouselScript }}
            />
          </>
        )}
      </div>
    </section>
  )
}
