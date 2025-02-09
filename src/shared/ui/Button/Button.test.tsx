import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('should render correctly', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with only first param', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
