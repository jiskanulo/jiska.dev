import { render, screen } from '@testing-library/react';
import { SocialLink } from './socialLink';
import {SiX} from 'react-icons/si'

describe('SocialLink', () => {
    it('renders correctly with an href', () => {
        const href = 'https://x.com';
        render(<SocialLink href={href} icon={SiX} label="Twitter" />);
        const linkElement = screen.getByRole('link', { name: 'Twitter' });
        expect(linkElement).toHaveAttribute('href', href);
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders correctly with an IconType as icon', () => {
        render(<SocialLink href="https://example.com" icon={SiX} label="Twitter" />);
        const iconElement = screen.getByRole('img', { hidden: true }); // React-icons use <svg> internally
        expect(iconElement).toBeInTheDocument();
    });

    it('renders correctly with a string as icon', () => {
        const iconSrc = '/path/to/image.png';
        render(<SocialLink href="https://example.com" icon={iconSrc} label="Image Icon" />);
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute('src', iconSrc);
        expect(imgElement).toHaveAttribute('width', '30');
        expect(imgElement).toHaveAttribute('height', '30');
    });

    it('renders correctly with a label', () => {
        const label = 'Twitter';
        render(<SocialLink href="https://example.com" icon={SiX} label={label} />);
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
    });
});