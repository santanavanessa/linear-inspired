import classNames from "classnames";

interface HeroProps {
    children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroTitle = ({children, className}: HeroElementProps) => {
    return (
        <h1 className={classNames("my-6 text-6xl md:text-8xl", className)}>{children}</h1>
    )
}

export const HeroSubTitle = ({children, className}: HeroElementProps) => {
    return (
        <p className={classNames("mb-12 text-lg md:text-xl text-primary-text", className)}>{children}</p>
    )
}

export const Hero = ({children}: HeroProps) => {
    return (
        <div className="text-center">
            {children}
    </div>
    )
}