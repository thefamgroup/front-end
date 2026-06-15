/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'
import { FaqAccordion } from '@/components/sections/FaqAccordion'

// ── FaqAccordion ──────────────────────────────────────────────────

describe('FaqAccordion', () => {
  it('renders all 7 FAQ questions', () => {
    render(<FaqAccordion />)
    expect(screen.getAllByRole('button')).toHaveLength(7)
  })

  it('answers are hidden by default', () => {
    render(<FaqAccordion />)
    expect(screen.queryByText(/DBS.*Disclosure and Barring/)).not.toBeInTheDocument()
  })

  it('expands answer when question is clicked', () => {
    render(<FaqAccordion />)
    const dbsBtn = screen.getByText(/Are your cleaners DBS checked/)
    fireEvent.click(dbsBtn.closest('button')!)
    expect(screen.getByText(/DBS.*Disclosure and Barring Service.*checked/i)).toBeInTheDocument()
  })

  it('collapses when clicked again', () => {
    render(<FaqAccordion />)
    const btn = screen.getAllByRole('button')[0]
    fireEvent.click(btn)
    fireEvent.click(btn)
    // answer should not be visible
    expect(btn.getAttribute('aria-expanded')).toBe('false')
  })

  it('only one answer open at a time', () => {
    render(<FaqAccordion />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    // first should now be closed
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false')
    expect(buttons[1].getAttribute('aria-expanded')).toBe('true')
  })

  it('first FAQ mentions quote / estimate', () => {
    render(<FaqAccordion />)
    expect(screen.getByText(/How do I get a quote/i)).toBeInTheDocument()
  })
})
