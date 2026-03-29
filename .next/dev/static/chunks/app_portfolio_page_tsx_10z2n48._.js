(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/portfolio/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const projects = [
    // Websites
    {
        title: 'Anita Mbinya Foundation',
        url: 'https://anitambinyafoundation.org/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/anitambinya.webp'
    },
    {
        title: 'Devlan Solutions LTD',
        url: 'https://devlan.co.ke/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/devlan_site.webp'
    },
    {
        title: 'Emuki Bees Hub',
        url: 'https://emukibeeshub.co.ke/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/emuki_bees_hub.webp'
    },
    {
        title: 'Kibwezi-Makindu Water Company',
        url: 'https://kibmawasco.com/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/kibmawasco.webp'
    },
    {
        title: 'Kibwezi Teachers Training College',
        url: 'https://kibweziteachers.com',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/kibwezi.webp'
    },
    {
        title: 'Makueni Boys High School',
        url: 'https://www.makueniboys.sc.ke/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/makueni boys.webp'
    },
    {
        title: 'The Masinga School',
        url: 'https://masingaboys.sc.ke/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/masinga_boys.webp'
    },
    {
        title: 'The Kitondo School',
        url: 'https://thekitondoschool.sc.ke/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/thekitondo.webp'
    },
    {
        title: "Mwaani Girls' High School",
        url: 'https://mwaanigirls.sc.ke/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/mwaani_girls.webp'
    },
    {
        title: 'St Martin Kathonzweni Boys',
        url: 'https://stmartinkathonzweni.sc.ke/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/kathonzweni_boys.webp'
    },
    {
        title: 'Ukamba Bible College',
        url: 'https://ubc.co.ke',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/ubc.webp'
    },
    {
        title: 'InterlPro LTD',
        url: 'https://intelproltd.com',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/intel_pro_ltd.webp'
    },
    {
        title: 'Tana Solutions LTD',
        url: 'https://tanasolutions.co.ke',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/tana_solutions_ltd.webp'
    },
    {
        title: 'Native Beecare LTD',
        url: 'https://nativebeecare.co.ke/',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/native_beecare.webp'
    },
    {
        title: 'Soo TV',
        url: 'https://sootv.co.ke',
        category: 'Websites',
        img: 'https://martmbithi.github.io/assets/img/portfolio/soo_tv.webp'
    },
    // Government Systems
    {
        title: 'CIFMIS',
        url: 'https://cifmis.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/cifmis.webp'
    },
    {
        title: 'IVAs',
        url: 'https://ivas.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/ivamis.webp'
    },
    {
        title: 'Umanyi Center',
        url: 'https://umanyi.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/umanyi_center.webp'
    },
    {
        title: 'Projects Monitoring & Tracking System',
        url: 'https://pmts.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/pmts.webp'
    },
    {
        title: 'Supplier Registration Portal',
        url: 'https://procurement.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/iSupplier.webp'
    },
    {
        title: 'Destination Makueni',
        url: 'https://destinationmakueni.com',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/destination-makueni.webp'
    },
    {
        title: 'CIC MIS',
        url: 'https://cic.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/makueni_cic_mis.webp'
    },
    {
        title: 'ECDE MIS',
        url: 'https://ecde.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/ecde_database.webp'
    },
    {
        title: 'Kilimo Makueni',
        url: 'https://kilimo.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/kilimo_makueni.webp'
    },
    {
        title: 'Wanarika Makueni',
        url: 'https://youth.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/makueni_youth.webp'
    },
    {
        title: 'Michezo Makueni',
        url: 'https://sports.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/makueni_sports.webp'
    },
    {
        title: 'Makueni VTC',
        url: 'https://vtc.makueni.go.ke',
        category: 'Government Systems',
        img: 'https://martmbithi.github.io/assets/img/portfolio/vtc.webp'
    },
    // Enterprise
    {
        title: 'NCA — Assets & Inventory MIS',
        url: 'https://nca.go.ke/',
        category: 'Enterprise & SaaS Platforms',
        img: 'https://martmbithi.github.io/assets/img/portfolio/nca_aims.webp'
    },
    {
        title: 'Ukamba Bible College ERP',
        url: 'https://ubc.co.ke/',
        category: 'Enterprise & SaaS Platforms',
        img: 'https://martmbithi.github.io/assets/img/portfolio/ubc_erp.webp'
    },
    {
        title: 'Makueni Crestwood College MIS',
        url: '#',
        category: 'Enterprise & SaaS Platforms',
        img: 'https://martmbithi.github.io/assets/img/portfolio/college_erp.webp'
    },
    {
        title: 'Lite Inventory MIS',
        url: '#',
        category: 'Enterprise & SaaS Platforms',
        img: 'https://martmbithi.github.io/assets/img/portfolio/LiteInventory.webp'
    },
    {
        title: 'Crib360 Rental MIS',
        url: 'https://makaziproperties.com',
        category: 'Enterprise & SaaS Platforms',
        img: 'https://martmbithi.github.io/assets/img/portfolio/crib360.webp'
    }
];
const filters = [
    'All',
    'Websites',
    'Government Systems',
    'Enterprise & SaaS Platforms'
];
function Portfolio() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const filtered = active === 'All' ? projects : projects.filter((p)=>p.category === active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            paddingTop: '64px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid-bg",
                style: {
                    padding: '5rem 2rem 3rem',
                    borderBottom: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse at 70% 40%, rgba(0, 229, 160, 0.04) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '1200px',
                            margin: '0 auto',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-label",
                                style: {
                                    marginBottom: '1rem'
                                },
                                children: "// portfolio.ts"
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: 'Sora, sans-serif',
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    fontWeight: 800,
                                    color: 'var(--text-primary)',
                                    lineHeight: 1.15,
                                    marginBottom: '1rem'
                                },
                                children: [
                                    "Shipped ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    maxWidth: '600px',
                                    lineHeight: 1.75
                                },
                                children: "A proven track record of designing, developing, and supporting scalable information systems across government, enterprise, and community sectors — from service automation to digital transformation."
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: 'var(--surface)',
                    borderBottom: '1px solid var(--border)',
                    padding: '1.25rem 2rem',
                    position: 'sticky',
                    top: '64px',
                    zIndex: 40
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    },
                    children: [
                        filters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActive(f),
                                style: {
                                    fontFamily: 'JetBrains Mono, monospace',
                                    fontSize: '0.73rem',
                                    fontWeight: active === f ? 600 : 400,
                                    color: active === f ? 'var(--bg)' : 'var(--text-secondary)',
                                    background: active === f ? 'var(--accent)' : 'transparent',
                                    border: active === f ? '1px solid var(--accent)' : '1px solid var(--border)',
                                    borderRadius: '4px',
                                    padding: '0.4rem 0.9rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                },
                                children: f === 'All' ? `all (${projects.length})` : f.toLowerCase().replace(/ & /g, ' & ')
                            }, f, false, {
                                fileName: "[project]/app/portfolio/page.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                marginLeft: 'auto',
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '0.7rem',
                                color: 'var(--text-muted)'
                            },
                            children: [
                                filtered.length,
                                " results"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '3rem 2rem 6rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '1.25rem'
                    },
                    children: filtered.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: project.url === '#' ? undefined : project.url,
                            target: project.url !== '#' ? '_blank' : undefined,
                            rel: "noopener noreferrer",
                            className: "project-card",
                            style: {
                                display: 'block',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                textDecoration: 'none',
                                position: 'relative',
                                transition: 'all 0.25s',
                                cursor: project.url === '#' ? 'default' : 'pointer'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative',
                                        height: '180px',
                                        overflow: 'hidden',
                                        background: 'var(--bg)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: project.img,
                                            alt: project.title,
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'top',
                                                transition: 'transform 0.4s ease'
                                            },
                                            loading: "lazy",
                                            onError: (e)=>{
                                                e.target.style.display = 'none';
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "project-overlay"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: '0.75rem',
                                                right: '0.75rem',
                                                background: 'rgba(8,12,16,0.85)',
                                                border: '1px solid var(--border)',
                                                borderRadius: '3px',
                                                padding: '0.15rem 0.5rem',
                                                fontFamily: 'JetBrains Mono, monospace',
                                                fontSize: '0.6rem',
                                                color: 'var(--text-muted)'
                                            },
                                            children: project.category === 'Government Systems' ? 'gov' : project.category === 'Enterprise & SaaS Platforms' ? 'enterprise' : 'web'
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '1rem 1.25rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '0.5rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: 'Sora, sans-serif',
                                                fontSize: '0.88rem',
                                                fontWeight: 600,
                                                color: 'var(--text-primary)',
                                                lineHeight: 1.3
                                            },
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        project.url !== '#' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--accent)',
                                                fontSize: '0.85rem',
                                                flexShrink: 0
                                            },
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/portfolio/page.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Portfolio, "Wi4sO45o5ZD32yBhhXpyieXPMmI=");
_c = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_portfolio_page_tsx_10z2n48._.js.map