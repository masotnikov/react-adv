import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWIthTranslation/renderWIthTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar test', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
