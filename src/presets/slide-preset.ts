export const slidePreset = {
    in: {
        from: {
            opacity: 0,
            y: "-=10%",
            duration: 0.6,
            ease: 'power2.in',
        },
        fromTo: {
            from: {
                opacity: 0,
                y: "-=20%",
            },
            to: {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.in',
            },
        }
    },
    out: {
        to: {
            opacity: 0,
            y: "-=30%",
            duration: 1,
            ease: 'expo.out',    
        },
        fromTo: {
            from: {
                opacity: 1,
                y: 0,
            },
            to: {
                opacity: 0,
                y: "-=30%",
                duration: 0.8,
                ease: 'expo.in',
            },
        }
    }
}