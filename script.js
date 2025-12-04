/* script.js - Verdant site behaviors: lazy images, updates list, skeleton blink, mobile nav, sorting */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Updates data (edit here to add updates) ----------
  // For SEO best practice: we also provide static pages for each update (see update-*.html examples).
  // Fields: id, title, summary, img, dateISO, humanDate, version, tags, slug (optional)
  const updates = [
    {
      id: 3,
      slug: "world-generation",
      title: "🌱 Devlog #3 — World Generation",
      summary: "Improved terrain generator with new natural biomes — procedural worlds feel handcrafted.",
      img: "https://i.imgur.com/ZYWMHLs.jpeg",
      dateISO: "2025-10-26",
      humanDate: "October 26, 2025",
      version: "v0.9.0",
      tags: ["devlog","systems"]
    },
    {
      id: 2,
      slug: "building-system",
      title: "⚒️ Devlog #2 — Building System",
      summary: "Snapping placement, rotation and improved textures for creative building.",
      img: "https://i.imgur.com/ZYWMHLs.jpeg",
      dateISO: "2025-10-10",
      humanDate: "October 10, 2025",
      version: "v0.8.1",
      tags: ["devlog","building"]
    }
    // ADD NEW UPDATE: add object here and optionally run generator script to produce static page
  ];

  // ---------- UI state ----------
  let sortNewest = true;

  // ---------- Lazy image loader with skeleton blink ----------
  const lazyLoad = () => {
    const lazyImages = Array.from(document.querySelectorAll('img.lazy'));
    if (!lazyImages.length) return;

const loadImage = (img) => {
  const src = img.dataset.src || img.getAttribute('src');
  if (!src) return;

  // ensure wrapper has .skeleton and .blink
  const wrapper = img.closest('.skeleton') || img.parentElement;
  if (wrapper && !wrapper.classList.contains('skeleton')) {
    wrapper.classList.add('skeleton', 'blink');
  }

  // Handler to run when image is ready (loaded or already cached)
  const onLoaded = () => {
    if (wrapper) {
      wrapper.classList.remove('blink');
      wrapper.classList.add('loaded');
    } else {
      img.style.opacity = 1;
    }
  };

  const onError = () => {
    if (wrapper) wrapper.classList.remove('blink');
    img.style.opacity = 1;
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23efefef"/><text x="50%" y="50%" font-size="18" fill="%23666" text-anchor="middle">Image failed to load</text></svg>';
  };

  // Attach listeners BEFORE setting src so we don't miss instant (cached) loads
  img.addEventListener('load', onLoaded, { once: true });
  img.addEventListener('error', onError, { once: true });

  // If the image is already complete (cached), call handler immediately
  if (img.complete && img.naturalWidth) {
    // small timeout to ensure handlers attached on all browsers
    setTimeout(onLoaded, 0);
    return;
  }

  // Finally set the src to start loading
  img.src = src;
};

    // Use IntersectionObserver
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            loadImage(img);
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '200px' });

      lazyImages.forEach(img => io.observe(img));
    } else {
      // fallback: load all
      lazyImages.forEach(loadImage);
    }
  };

  // ---------- Render updates list ----------
  const updatesGrid = document.getElementById('updatesGrid');
  const filterTag = document.getElementById('filterTag');

  function populateFilterOptions() {
    const tags = new Set();
    updates.forEach(u => (u.tags || []).forEach(t => tags.add(t)));
    // keep 'all' default
    tags.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t; opt.textContent = t[0].toUpperCase() + t.slice(1);
      filterTag.appendChild(opt);
    });
  }

  function renderUpdates() {
    updatesGrid.innerHTML = '';
    const tagFilter = filterTag.value || 'all';
    const list = [...updates].filter(u => tagFilter==='all' ? true : (u.tags || []).includes(tagFilter))
      .sort((a,b) => sortNewest ? (new Date(b.dateISO) - new Date(a.dateISO)) : (new Date(a.dateISO) - new Date(b.dateISO)));

    list.forEach(u => {
      const a = document.createElement('a');
      a.className = 'update-card';
      // If you build static pages, they will be at `update-<id>.html` or `updates/<slug>.html`
      // Prefer slug pages when available:
      const page = u.slug ? `updates/${u.slug}.html` : `updates/${u.id}.html`;
      a.href = page;
      a.innerHTML = `
        <div class="update-thumb skeleton ratio-4-3 blink">
          <img class="lazy" data-src="${u.img}" alt="${u.title}" width="480" height="360">
        </div>
        <div class="update-body">
          <div>
            <h3>${u.title}</h3>
            <p>${u.summary}</p>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div class="muted"><time datetime="${u.dateISO}">${u.humanDate}</time> • <strong>${u.version || ''}</strong></div>
            <div class="muted">Read</div>
          </div>
        </div>
      `;
      updatesGrid.appendChild(a);
    });

    // after DOM inserts, run lazy loader
    lazyLoad();
  }

  // ---------- Sorting UI ----------
  const sortToggle = document.getElementById('sortToggle');
  const sortLabelBtn = document.getElementById('sortLabelBtn');
  sortToggle.addEventListener('click', () => {
    sortNewest = !sortNewest;
    sortLabelBtn.textContent = sortNewest ? 'Newest' : 'Oldest';
    sortToggle.setAttribute('aria-pressed', sortNewest ? 'true' : 'false');
    renderUpdates();
  });
  sortLabelBtn.addEventListener('click', () => sortToggle.click());

  // ---------- Filter UI ----------
  filterTag.addEventListener('change', renderUpdates);
  populateFilterOptions();

// ---------- Developers ----------
document.querySelectorAll('.team-tabs button').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.team-tabs button.active').classList.remove('active');
    document.querySelector('.team-panel.active').classList.remove('active');

    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
}); 
  
  // ---------- Mobile nav toggle ----------
  const toggleBtn = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');

toggleBtn.addEventListener('click', (e) => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
  toggleBtn.setAttribute('aria-expanded', !expanded);

  if (!expanded) {
    // Open menu
    mobileNav.style.height = mobileNav.scrollHeight + "px";
  } else {
    // Close menu
    mobileNav.style.height = "0";
  }

  e.stopPropagation();
});

// Close menu when clicking a link
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.style.height = "0";
    toggleBtn.setAttribute('aria-expanded', false);
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
    mobileNav.style.height = "0";
    toggleBtn.setAttribute('aria-expanded', false);
  }
});

  // ---------- Year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  
  
  // ---------- Header elevation ----------
  window.addEventListener("scroll", () => {
  document.querySelector(".site-header")
    .classList.toggle("scrolled", window.scrollY > 16);
});
// ---------- Countdown ----------
const countdownEl = document.getElementById("countdown");
const release = document.getElementById("release-date");
const targetDate = new Date("January 1, 2026 12:00:00").getTime();

async function startCountdown() {
  let currentTime;
  try {
    const res = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=UTC");
    const data = await res.json();
    currentTime = new Date(data.dateTime).getTime();
    //console.log("✅ Time API success! Current UTC time:", data.dateTime);
  } catch(err) {
    console.warn("⚠️ Time API failed, using local time instead.");
    currentTime = new Date().getTime();
  }

  const interval = setInterval(() => {
    const distance = targetDate - currentTime;
    if (distance <= 0) {
      clearInterval(interval);
      release.innerHTML = '<p style="color: var(--accent)">Download Demo NOW! join <a href="https://discord.gg/hSDqqvKnbA" style="color: var(--accent); font-weight: bold;font-style: normal;">Discord</a></p> <p style="color: var(--muted);margin-top:-15px;">Available only for: <i class="fa-solid fa-mobile"></i><i class="fa-brands fa-android"></i></p>';
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    currentTime += 1000;
  }, 1000);
}

startCountdown();
  // initial render
  renderUpdates();
});
      
