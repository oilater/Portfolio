### 1. 각 Rally는 각자의 타임라인을 가지고 있음

처음엔 Rally를 하나의 Tween으로 생각했지만, GSAP은 framer-motion과 달리 각각의 프로퍼티에 transition을 주기 어렵기 때문에, 
Timeline을 생성해 동시에 각 모션들이 실행되도록 하는 것이 제일 이상적이다.


### 2. Exit Animation은 Rally가 가진 Timeline의 onComplete에 설정

이벤트 기반의 Exit Animation은 contextSafe로 감싸주었다.


```ts
Rally({
    target: ".타이틀",
    playCount: 'infinite',
    motions: [
    {
        duration: 0.8,
        ease: "power2.out",
        translateY: { to: -40},
    },
    {
        ease: 'power2.in',
        translateY: { to: 0},
    },
    ],
}),
```