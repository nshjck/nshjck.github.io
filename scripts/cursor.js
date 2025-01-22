// credit to bee (https://bee.nekoweb.org/) for the code, im just putting it here so it loads faster :3

var cursoreffects = function(e) {
    'use strict';
    return e.fairyDustCursor = function(e) {
        let t = e && e.colors || ['#D61C59', '#E7D84B', '#1B8798'],
            i = e && e.element,
            n = i || document.body,
            o = window.innerWidth,
            s = window.innerHeight;
        const h = {
                x: o / 2,
                y: o / 2
            },
            c = {
                x: o / 2,
                y: o / 2
            },
            l = [],
            d = [];
        let r, a, A;
        const u = window.matchMedia('(prefers-reduced-motion: reduce)');

        function m() {
            if (u.matches) return console.log('This browser has prefers reduced motion turned on, so the cursor did not init'), !1;
            r = document.createElement('canvas'), a = r.getContext('2d'), r.style.top = '0px', r.style.left = '0px', r.style.pointerEvents = 'none', i ? (r.style.position = 'absolute', n.appendChild(r), r.width = n.clientWidth, r.height = n.clientHeight) : (r.style.position = 'fixed', n.appendChild(r), r.width = o, r.height = s), a.font = '21px serif', a.textBaseline = 'middle', a.textAlign = 'center', t.forEach((e => {
                let t = a.measureText('*'),
                    i = document.createElement('canvas'),
                    n = i.getContext('2d');
                i.width = t.width, i.height = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent, n.fillStyle = e, n.textAlign = 'center', n.font = '21px serif', n.textBaseline = 'middle', n.fillText('*', i.width / 2, t.actualBoundingBoxAscent), d.push(i)
            })), n.addEventListener('mousemove', f), n.addEventListener('touchmove', p, {
                passive: !0
            }), n.addEventListener('touchstart', p, {
                passive: !0
            }), window.addEventListener('resize', g), w()
        }

        function g(e) {
            o = window.innerWidth, s = window.innerHeight, i ? (r.width = n.clientWidth, r.height = n.clientHeight) : (r.width = o, r.height = s)
        }

        function p(e) {
            if (e.touches.length > 0)
                for (let t = 0; t < e.touches.length; t++) y(e.touches[t].clientX, e.touches[t].clientY, d[Math.floor(Math.random() * d.length)])
        }

        function f(e) {
            window.requestAnimationFrame((() => {
                if (i) {
                    const t = n.getBoundingClientRect();
                    h.x = e.clientX - t.left, h.y = e.clientY - t.top
                } else h.x = e.clientX, h.y = e.clientY;
                Math.hypot(h.x - c.x, h.y - c.y) > 1.5 && (y(h.x, h.y, d[Math.floor(Math.random() * t.length)]), c.x = h.x, c.y = h.y)
            }))
        }

        function y(e, t, i) {
            l.push(new x(e, t, i))
        }

        function w() {
            ! function() {
                a.clearRect(0, 0, o, s);
                for (let e = 0; e < l.length; e++) l[e].update(a);
                for (let e = l.length - 1; e >= 0; e--) l[e].lifeSpan < 0 && l.splice(e, 1)
            }(), A = requestAnimationFrame(w)
        }

        function v() {
            r.remove(), cancelAnimationFrame(A), n.removeEventListener('mousemove', f), n.removeEventListener('touchmove', p), n.removeEventListener('touchstart', p), window.addEventListener('resize', g)
        }

        function x(e, t, i) {
            const n = Math.floor(30 * Math.random() + 60);
            this.initialLifeSpan = n, this.lifeSpan = n, this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: .7 * Math.random() + .9
            }, this.position = {
                x: e,
                y: t
            }, this.canv = i, this.update = function(e) {
                this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.velocity.y += .02;
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                e.drawImage(this.canv, this.position.x - this.canv.width / 2 * t, this.position.y - this.canv.height / 2, this.canv.width * t, this.canv.height * t)
            }
        }
        return u.onchange = () => {
            u.matches ? v() : m()
        }, m(), {
            destroy: v
        }
    }, e.rainbowCursor = function(e) {
        let t, i, n, o = e && e.element,
            s = o || document.body,
            h = window.innerWidth,
            c = window.innerHeight,
            l = {
                x: h / 2,
                y: h / 2
            },
            d = [];
        const r = e?.length || 20,
            a = e?.colors || ['#FE0000', '#FD8C00', '#FFE500', '#119F0B', '#0644B3', '#C22EDC'],
            A = e?.size || 3;
        let u = !1;
        const m = window.matchMedia('(prefers-reduced-motion: reduce)');

        function g() {
            if (m.matches) return console.log('This browser has prefers reduced motion turned on, so the cursor did not init'), !1;
            t = document.createElement('canvas'), i = t.getContext('2d'), t.style.top = '0px', t.style.left = '0px', t.style.pointerEvents = 'none', o ? (t.style.position = 'absolute', s.appendChild(t), t.width = s.clientWidth, t.height = s.clientHeight) : (t.style.position = 'fixed', document.body.appendChild(t), t.width = h, t.height = c), s.addEventListener('mousemove', f), window.addEventListener('resize', p), y()
        }

        function p(e) {
            h = window.innerWidth, c = window.innerHeight, o ? (t.width = s.clientWidth, t.height = s.clientHeight) : (t.width = h, t.height = c)
        }

        function f(e) {
            if (o) {
                const t = s.getBoundingClientRect();
                l.x = e.clientX - t.left, l.y = e.clientY - t.top
            } else l.x = e.clientX, l.y = e.clientY;
            if (!1 === u) {
                u = !0;
                for (let e = 0; e < r; e++) t = l.x, i = l.y, void 0, d.push(new v(t, i))
            }
            var t, i
        }

        function y() {
            ! function() {
                i.clearRect(0, 0, h, c), i.lineJoin = 'round';
                let e = [],
                    t = l.x,
                    n = l.y;
                d.forEach((function(i, o, s) {
                    let h = s[o + 1] || s[0];
                    i.position.x = t, i.position.y = n, e.push({
                        x: t,
                        y: n
                    }), t += .4 * (h.position.x - i.position.x), n += .4 * (h.position.y - i.position.y)
                })), a.forEach(((t, n) => {
                    i.beginPath(), i.strokeStyle = t, e.length && i.moveTo(e[0].x, e[0].y + n * (A - 1)), e.forEach(((e, t) => {
                        0 !== t && i.lineTo(e.x, e.y + n * A)
                    })), i.lineWidth = A, i.lineCap = 'round', i.stroke()
                }))
            }(), n = requestAnimationFrame(y)
        }

        function w() {
            t.remove(), cancelAnimationFrame(n), s.removeEventListener('mousemove', f), window.addEventListener('resize', p)
        }

        function v(e, t) {
            this.position = {
                x: e,
                y: t
            }
        }
        return m.onchange = () => {
            m.matches ? w() : g()
        }, g(), {
            destroy: w
        }
    }, Object.defineProperty(e, '__esModule', {
        value: !0
    }), e
}({});

window.addEventListener('load', (event) => {
    new cursoreffects.fairyDustCursor({
        colors: ['#D60270', '#9B4F96', '#0038A8'],
    });
    if (screen.width > 700) {
        new cursoreffects.rainbowCursor({
            colors: ['#D60270', '#9B4F96', '#0038A8'],
            length: '26',
            size: '5',
        })
    }
});