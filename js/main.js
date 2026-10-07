// =============================================
// Joannah Nicole Hofileña — Portfolio Scripts
// Author: Joannah Nicole Hofileña
// Description: Scroll reveal, nav, modals
// =============================================


  function scrollToId(id){
    var el = document.getElementById(id);
    if(el){ el.scrollIntoView({behavior:'smooth'}); }
  }

  // Scroll-triggered reveal: elements with .sr fade/slide in once, the first
  // time they enter the viewport. Mirrors the hero's own load sequence so
  // scrolling down keeps discovering the page rather than just dumping content.
  var srEls = document.querySelectorAll('.sr');
  if('IntersectionObserver' in window && srEls.length){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.classList.add('in');
          obs.unobserve(en.target);
        }
      });
    }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
    srEls.forEach(function(el){ obs.observe(el); });
  } else {
    srEls.forEach(function(el){ el.classList.add('in'); });
  }

  // Cursor-tracking glow on project cards, like inspecting an element in a
  // design tool — the highlight follows the pointer instead of sitting static.
  var cards = document.querySelectorAll('.project-card');
  cards.forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      card.style.setProperty('--mx', x + 'px');
      card.style.setProperty('--my', y + 'px');
    });
  });

  // Nav compresses slightly once you've scrolled past the hero's top edge,
  // giving the sticky bar a sense of layering rather than sitting flat throughout.
  var navEl = document.querySelector('nav');
  function onScroll(){
    if(window.scrollY > 40){ navEl.classList.add('scrolled'); }
    else{ navEl.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Certificate data (embedded as base64 so the file stays a single self-contained HTML doc)
  var CERT_IMAGES = {
    devfest: 'assets/images/devfest.jpeg',
    techtrack: 'assets/images/techtrack.jpeg',
    networking: 'assets/images/networking.jpeg',
    webdesign: 'assets/images/webdesign.jpeg',
  };

  function openCert(key, title){
    var modal = document.getElementById('certModal');
    var img = document.getElementById('certModalImg');
    var titleEl = document.getElementById('certModalTitle');
    img.src = CERT_IMAGES[key] || '';
    titleEl.textContent = title || 'CERTIFICATE';
    modal.classList.add('open');
    requestAnimationFrame(function(){ modal.classList.add('show'); });
    document.body.style.overflow = 'hidden';
  }
  function closeCert(){
    var modal = document.getElementById('certModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(function(){ modal.classList.remove('open'); }, 250);
  }
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closeCert(); }
  });
