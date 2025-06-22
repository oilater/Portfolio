export const fadePreset = {
    in: {
        from: {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.inOut',
        },
        fromTo: {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.inOut',
            },
        }
    },
    out: {
        to: {
            opacity: 0,
            duration: 1,
            ease: 'expo.out',    
        },
        fromTo: {
            from: {
                opacity: 1,
            },
            to: {
                opacity: 0,
                duration: 0.8,
                ease: 'expo.in',
            },
        }
    }
}