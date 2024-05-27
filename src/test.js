if (typeof SharedWorker !== 'undefined') {
  try {
    const worker = new SharedWorker(url, 'hao360')
  } catch (error) {
    console.log(error)
  }
}
