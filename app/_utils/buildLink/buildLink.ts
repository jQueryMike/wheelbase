function buildLink(link: any) {
  const fixedLink = {
    title: link.title,
    target: link.target || '_self',
    href: link?.url || link.route?.path ? link.url || link.route.path : null,
    text: link.title,
  };

  return fixedLink;
}

export default buildLink;
