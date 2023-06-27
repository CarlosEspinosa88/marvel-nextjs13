const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null
})

window.IntersectionObserver = jest.fn(intersectionObserverMock);